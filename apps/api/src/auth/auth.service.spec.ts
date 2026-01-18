import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { MfaService } from './mfa.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;
  let mfaService: MfaService;

  const mockUser = {
    id: 'user-1',
    email: 'test@example.com',
    passwordHash: '$2b$10$hashedpassword',
    role: 'OWNER',
    organizationId: 'org-1',
    mfaEnabled: false,
    mfaSecret: null,
    isActive: true,
    organization: {
      id: 'org-1',
      name: 'Test Org',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              update: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
        {
          provide: MfaService,
          useValue: {
            verifyToken: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
    mfaService = module.get<MfaService>(MfaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user when credentials are valid', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(require('bcrypt'), 'compare').mockResolvedValue(true);

      const result = await service.validateUser('test@example.com', 'password');

      expect(result).toEqual({
        id: 'user-1',
        email: 'test@example.com',
        role: 'OWNER',
        organizationId: 'org-1',
        mfaEnabled: false,
        mfaSecret: null,
        isActive: true,
        organization: {
          id: 'org-1',
          name: 'Test Org',
        },
      });
    });

    it('should return null when user is not found', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      const result = await service.validateUser('test@example.com', 'password');

      expect(result).toBeNull();
    });

    it('should return null when password is invalid', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(require('bcrypt'), 'compare').mockResolvedValue(false);

      const result = await service.validateUser('test@example.com', 'wrongpassword');

      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return tokens when login is successful', async () => {
      jest.spyOn(jwtService, 'sign').mockReturnValue('mock-token');
      jest.spyOn(prismaService.user, 'update').mockResolvedValue(mockUser);

      const result = await service.login(mockUser);

      expect(result).toEqual({
        accessToken: 'mock-token',
        refreshToken: 'mock-token',
        user: {
          id: 'user-1',
          email: 'test@example.com',
          role: 'OWNER',
          organizationId: 'org-1',
          mfaEnabled: false,
        },
      });
    });

    it('should require MFA code when MFA is enabled', async () => {
      const userWithMfa = { ...mockUser, mfaEnabled: true, mfaSecret: 'secret' };
      jest.spyOn(mfaService, 'verifyToken').mockResolvedValue(true);
      jest.spyOn(jwtService, 'sign').mockReturnValue('mock-token');
      jest.spyOn(prismaService.user, 'update').mockResolvedValue(userWithMfa);

      const result = await service.login(userWithMfa, '123456');

      expect(mfaService.verifyToken).toHaveBeenCalledWith('secret', '123456');
      expect(result.accessToken).toBe('mock-token');
    });
  });
});
