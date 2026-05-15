import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import AuthHero from "../Components/AuthHero";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("productr_token", response.data.token);
      navigate("/home");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to login. Please check your email and password."
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
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Login</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">Login to your Productr Account</h1>
            <p className="mt-4 text-sm text-slate-500">Enter your email and password to access the product dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              label="Email or Phone number"
              type="text"
              placeholder="Enter email or phone number"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <PrimaryButton className="w-full py-4" type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Login"}
            </PrimaryButton>
          </form>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm text-slate-500">
            Don&apos;t have a Productr Account? <Link to="/signup" className="font-semibold text-slate-950">Sign up here</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
