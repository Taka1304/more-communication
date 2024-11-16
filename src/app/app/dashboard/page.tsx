import { createClient } from "@/libs/supabase/server";

const UserDashboard = async () => {
	const supabase = await createClient();
	const user = await supabase.auth.getUser();
	console.log(user);
	return <div>UserDashboard</div>;
};

export default UserDashboard;
