import { useState } from "react";

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  about: string;
  cv: string;
}


function App() {

  const [successMessage, setSuccessMessage] = useState("");

  const [isPending, setIsPending] = useState(false);

  const [data, setData] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    about: "",
    cv: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);

    const file = (e.target as HTMLFormElement).cv.files[0];

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("Email", data.email);
    formData.append("Description", data.about);
    formData.append("cv", file);

    fetch("http://localhost:3000/candidate", {
      method: "POST",
      body: formData,
    }).then(() => {
      setIsPending(false);
      setSuccessMessage("Data stored successfully!");
    });
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <form
          className="card w-96 bg-base-100 shadow-xl"
          data-theme="dark"
          onSubmit={handleSubmit}
        >
          <div className="card-header flex justify-center mt-3">
            <h2 className="card-title">Sign Up</h2>
          </div>
          <div className="card-body">

            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
              name="firstName"
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
              name="lastName"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />

            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              name="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <textarea
              className="textarea input-bordered textarea-md w-full max-w-xs"
              placeholder="About you"
              name="about"
              onChange={(e) => setData({ ...data, about: e.target.value })}
            ></textarea>

            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              placeholder="CV"
              name="cv"
              onChange={(e) => setData({ ...data, cv: e.target.value })}
            />

            <div className="card-actions justify-end">
              {!isPending && (
                <button className="btn btn-primary">Submit</button>
              )}
              {isPending && (
                <button className="btn btn-primary loading">Loading...</button>
              )}
            </div>

            {successMessage && (
              <div className="alert alert-success">
                <span>{successMessage}</span>
              </div>
            )}
            
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
