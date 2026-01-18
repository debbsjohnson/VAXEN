'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@vaxen/ui';
import { Button } from '@vaxen/ui';
import { Upload, Download } from 'lucide-react';

export function BatchPayouts() {
  const t = useTranslations('payouts');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Batch Payouts</h1>
        <p className="text-muted-foreground">
          Upload a CSV file to process multiple payouts at once
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Batch File</CardTitle>
          <CardDescription>
            Download the template, fill it with your payout data, and upload it here
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              {t('downloadTemplate')}
            </Button>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              {t('batchUpload')}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            CSV template includes columns for beneficiary, amount, currency, and reference.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
