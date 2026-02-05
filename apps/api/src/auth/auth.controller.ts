import { Controller, Post, Body, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { MfaService } from './mfa.service';
import { LoginRequest, RefreshTokenRequest, MfaVerifyRequest } from '@vaxen/types';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private mfaService: MfaService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginData: LoginRequest) {
    const user = await this.authService.validateUser(loginData.email, loginData.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user, loginData.mfaCode);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  @ApiResponse({ status: 401, description: 'Invalid refresh token' })
  async refresh(@Body() refreshData: RefreshTokenRequest) {
    return this.authService.refreshToken(refreshData.refreshToken);
  }

  @Post('mfa/setup')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Setup MFA for user' })
  @ApiResponse({ status: 200, description: 'MFA setup initiated' })
  async setupMfa(@Request() req) {
    const { secret, qrCodeUrl } = this.mfaService.generateSecret();
    const qrCode = await this.mfaService.generateQRCode(secret);
    
    return {
      secret,
      qrCodeUrl,
      qrCode,
    };
  }

  @Post('mfa/verify')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verify MFA setup' })
  @ApiResponse({ status: 200, description: 'MFA verified successfully' })
  async verifyMfa(@Request() req, @Body() mfaData: MfaVerifyRequest) {
    // In a real implementation, you would save the MFA secret to the user
    // For now, we'll just verify the code
    const isValid = this.mfaService.verifyToken(req.user.mfaSecret || '', mfaData.code);
    
    if (isValid) {
      // Enable MFA for user
      // await this.prisma.user.update({
      //   where: { id: req.user.id },
      //   data: { mfaEnabled: true, mfaSecret: secret },
      // });
    }
    
    return { success: isValid };
  }
}
