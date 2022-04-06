import { TopNav, SideNav } from "modules/avl-components/src";
//import { useTheme } from "../../wrappers";

export default {
	name: "ppdaf design",
	description: "Design system for NYSDOT data platform",
	examples: [{
		title: "Basic Example",
		Component: (props) => {
			return (
				<div className="h-full w-full bg-gray-100">
					<TopNav {...props} />
					<SideNav />
					<div className="max-w-5xl mx-auto bg-white my-4 p-4">Some Content</div>
				</div>
			);
		},
		props: [{
			name: "menuItems",
			type: "data",
			default: [
				
				{
					name: "Documentation",
					icon: "os-icon os-icon-users",
				},
				{
					name: "Data Download",
					icon: "os-icon os-icon-edit-32",
				},
				
			],
			},
			{
				name: "leftMenu",
				type: "Component",
				default: (
					<div className="flex items-center p-4 justify-center h-12">
						<span className="text-lg font-medium uppercase">AVL Design</span>
					</div>
				),
			},
			{
				name: "rightMenu",
				type: "Component",
				default: (
					<div className="flex items-center md:w-32 justify-center h-12 w-full hover:bg-gray-400 hover:text-white">
						<span className="text-sm cursor-pointer">Login</span>
					</div>
				),
			},
		]
	}]
	
};
