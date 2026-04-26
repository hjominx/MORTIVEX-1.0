'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from '../actions';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [showPw, setShowPw]   = useState(false);
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await signIn(formData);
    if (result?.error) { setError(result.error); setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[360px]">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-[22px] font-semibold tracking-tight text-foreground">MOTIVEX</h1>
          <p className="text-[13px] text-muted-foreground mt-1">계정에 로그인</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-border card-shadow p-6">
          <form action={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-start gap-2.5 p-3 bg-loss text-loss rounded-xl text-[13px]">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">이메일</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  className="h-10 text-[14px] bg-muted/50 border-border/60 rounded-xl focus:bg-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[13px] font-medium text-foreground">비밀번호</label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-[12px] text-primary hover:underline"
                  >
                    비밀번호 찾기
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    name="password"
                    type={showPw ? 'text' : 'password'}
                    placeholder="비밀번호 입력"
                    autoComplete="current-password"
                    required
                    className="h-10 text-[14px] bg-muted/50 border-border/60 rounded-xl focus:bg-white pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-10 text-[14px] font-medium rounded-xl bg-primary hover:bg-primary/90 text-white transition-colors"
            >
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-[13px] text-muted-foreground mt-5">
          계정이 없으신가요?{' '}
          <Link href="/auth/signup" className="text-primary font-medium hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
