import { Component } from "react";

interface Section {
	percentage: number;
	color: string;
}

interface PieProps {
	radius: number,
	sections: Section[],
	strokeCap: string,
	dividerSize?: number,
}

export = Pie;
declare class Pie extends Component<PieProps> {}
