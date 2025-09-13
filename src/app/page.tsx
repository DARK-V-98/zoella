import { PasswordProtection } from '@/components/password-protection';
import { PrincessWebsite } from '@/components/princess-website';

export default function Home() {
  return (
    <PasswordProtection>
      <PrincessWebsite />
    </PasswordProtection>
  );
}
