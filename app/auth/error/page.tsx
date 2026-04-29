import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-border card-shadow p-6 space-y-4 text-center">
        <h1 className="text-xl font-semibold">인증 중 문제가 발생했습니다</h1>
        <p className="text-sm text-muted-foreground">
          링크가 만료되었거나 잘못된 요청일 수 있습니다. 다시 로그인하거나 비밀번호 재설정을 시도해주세요.
        </p>

        <div className="flex gap-2 justify-center">
          <Button asChild className="rounded-xl">
            <Link href="/auth/login">로그인으로 이동</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/auth/forgot-password">비밀번호 재설정</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
