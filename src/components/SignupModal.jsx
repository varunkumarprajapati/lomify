import { Modal } from "./common";

export default function SignupModal({ onClick }) {
  return (
    <Modal onClick={onClick}>
      <h2 className="mb-4 text-xl font-bold">Account Created Successfully!</h2>
      <p className="mb-4 text-gray-700">
        Congratulations! Your account has been created.{" "}
        <strong>
          A verification email has been sent to your registered email address.
        </strong>{" "}
        Please verify your email within the next <strong>10 minutes</strong> to
        activate your account. If you don't see the email, check your spam or
        junk folder.
      </p>
    </Modal>
  );
}
