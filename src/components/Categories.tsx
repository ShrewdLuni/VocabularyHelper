import { CategoryButton } from "./CategoryButton"

export const Categories = () => {

	return (
		<div className="grid grid-cols-4 gap-4 w-[90%] lg:w-[50%]">
			<CategoryButton text="Family" />
			<CategoryButton text="Food"/>
			<CategoryButton text="Routine"/>
			<CategoryButton text="Clothes"/>
			<CategoryButton text="Health"/>
			<CategoryButton text="Weather"/>
			<CategoryButton text="Location"/>
			<CategoryButton text="All"/>
		</div>
	)
}