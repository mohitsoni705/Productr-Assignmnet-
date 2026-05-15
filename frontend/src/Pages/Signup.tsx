import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import AuthHero from "../Components/AuthHero";
import api from "../api/axios";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/api/auth/signup", { username, email, password });
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.9fr]">
        <AuthHero />
        <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Create Account</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">Start your Productr journey</h1>
            <p className="mt-4 text-sm text-slate-500">Sign up and begin managing products in one place.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <PrimaryButton className="w-full py-4" type="submit" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Sign Up"}
            </PrimaryButton>
          </form>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm text-slate-500">
            Already have a Productr account? <Link className="font-semibold text-slate-950" to="/">Login here</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
