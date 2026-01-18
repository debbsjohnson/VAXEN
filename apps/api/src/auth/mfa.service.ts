import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';

@Injectable()
export class MfaService {
  generateSecret(): { secret: string; qrCodeUrl: string } {
    const secret = speakeasy.generateSecret({
      name: 'Vaxen',
      issuer: 'Vaxen Treasury',
    });

    return {
      secret: secret.base32,
      qrCodeUrl: secret.otpauth_url,
    };
  }

  async generateQRCode(secret: string): Promise<string> {
    const otpauthUrl = `otpauth://totp/Vaxen?secret=${secret}&issuer=Vaxen%20Treasury`;
    return QRCode.toDataURL(otpauthUrl);
  }

  verifyToken(secret: string, token: string): boolean {
    return speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 2, // Allow 2 time steps before/after current time
    });
  }

  generateBackupCodes(): string[] {
    const codes = [];
    for (let i = 0; i < 10; i++) {
      codes.push(Math.random().toString(36).substring(2, 8).toUpperCase());
    }
    return codes;
  }
}
