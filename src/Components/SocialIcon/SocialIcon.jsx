import { Link } from "react-router-dom";
export default function SocialIcon({link , children , classname}) {
  return (
    <Link to={link} target="_blank" className={classname}>
      {children}
    </Link>
  );
}
