import {
	RegisterLink,
	LoginLink,
	LogoutLink,
	getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

const Header = () => {
	const { isAuthenticated } = getKindeServerSession();

	return (
		<header className="header">
			<Link href="/">
				<h2>Kinde-Auth</h2>
			</Link>
			<div>
				<Link href="/main">Main</Link>
				{!isAuthenticated() ? (
					<>
						<RegisterLink>Register</RegisterLink>
						<LoginLink>Log in</LoginLink>
					</>
				) : (
					<LogoutLink>Log Out</LogoutLink>
				)}
			</div>
		</header>
	);
};

export default Header;
