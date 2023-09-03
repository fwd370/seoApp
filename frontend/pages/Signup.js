import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import SignUpComponent from "../components/auth/SignUpComponent";

const Signup = () => {
  return (
    <Layout>
      <h2>Signup Page</h2>
      <SignUpComponent />
    </Layout>
  );
};

export default Signup;
