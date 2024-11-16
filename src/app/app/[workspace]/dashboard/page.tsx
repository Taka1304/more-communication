import { createClient } from "@/libs/supabase/server";

const DashBoardPage = async () => {
	const supabase = await createClient();
	console.log(await supabase.auth.getUser());
	return <div>DashBoardPage</div>;
};

export default DashBoardPage;
