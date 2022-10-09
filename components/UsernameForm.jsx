export default function UsernameForm({
  username,
  setUsername,
  setIsSubmitted,
}) {
  const handleSubmission = (e, name) => {
    e.preventDefault();

    if (name === '' || !name) return;

    setIsSubmitted((prevState) => !prevState);
  };

  return (
    <div className="h-full md:flex md:items-center md:justify-center">
      <form
        action="#"
        onSubmit={(e) => handleSubmission(e, username)}
        className="mt-6 flex max-w-3xl flex-col justify-center px-4 lg:max-w-6xl"
      >
        <label
          htmlFor="first-name"
          className="font-work-sans text-7xl md:text-8xl"
        >
          Hello stranger, what is your name?
        </label>
        <input
          type="text"
          value={username}
          id="first-name"
          name="username"
          placeholder="John"
          onChange={(e) => setUsername(e.target.value)}
          className="mt-4 w-full rounded-sm bg-secondary/50 p-3 text-tertiary caret-tertiary transition-colors duration-300 placeholder:text-white/40 focus:bg-secondary focus:outline-dashed focus:outline-2 focus:outline-tertiary md:mt-8"
        />

        {username && (
          <button
            type="button"
            onClick={(e) => handleSubmission(e, username)}
            className="mt-4 w-full rounded-sm bg-secondary p-3 text-center font-work-sans font-bold uppercase tracking-widest text-tertiary"
          >
            Next
          </button>
        )}
      </form>
    </div>
  );
}
