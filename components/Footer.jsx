export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-secondary p-2">
      <span className="text-xs text-tertiary">
        Designed and Coded by{' '}
        <a
          href="https://github.com/kens-visuals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline transition-all duration-300 hover:text-tertiary"
        >
          kens-visuals
        </a>
      </span>
    </footer>
  );
}
