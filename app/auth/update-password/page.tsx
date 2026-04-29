'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { updatePassword } from '../actions';

export default function UpdatePasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const result = await updatePassword(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-border card-shadow p-6 space-y-4">
        <div className="text-center">
          <h1 className="text-[22px] font-semibold tracking-tight">새 비밀번호 설정</h1>
          <p className="text-[13px] text-muted-foreground mt-1">
            새 비밀번호를 입력하면 즉시 계정에 반영됩니다.
          </p>
        </div>

        <form action={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[13px] font-medium text-foreground mb-1.5">새 비밀번호</label>
            <Input
              name="password"
              type="password"
              required
              className="h-10 text-[14px] bg-muted/50 border-border/60 rounded-xl focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-foreground mb-1.5">새 비밀번호 확인</label>
            <Input
              name="confirmPassword"
              type="password"
              required
              className="h-10 text-[14px] bg-muted/50 border-border/60 rounded-xl focus:bg-white"
            />
          </div>

          {error && <p className="text-[13px] text-red-600">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 text-[14px] font-medium rounded-xl"
          >
            {loading ? '변경 중...' : '비밀번호 변경'}
          </Button>
        </form>

        <p className="text-center text-[13px] text-muted-foreground">
          <Link href="/auth/login" className="text-primary hover:underline">로그인으로 이동</Link>
        </p>
      </div>
    </div>
  );
}
