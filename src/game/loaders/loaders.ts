import { Loader } from "excalibur";
import { Sounds } from "../sounds/sounds";

interface Props {
	sounds: Sounds;
}

export const createLoader = (props: Props) => {
	const { sounds } = props;

	const resources = Object.values({ ...sounds });
	const loader = new Loader(resources);

	return loader;
};
