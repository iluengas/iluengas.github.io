import Link from 'next/link';

export default function LeftBar() {
  return (
    <nav className="hidden bg-black w-10 flex flex-col space-y-4 items-center align-center">
      <a href="#1">1</a>
      <a href="#2">2</a>
      <a href="#3">3</a>
    </nav>
  );
}
