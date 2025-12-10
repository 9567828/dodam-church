import style from "./(screen)/login.module.scss";
import LoginContainer from "./(screen)/LoginContainer";

export default function Page() {
  return (
    <div className={style.body}>
      <LoginContainer />
    </div>
  );
}
