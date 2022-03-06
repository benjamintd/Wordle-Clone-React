import { Guess } from "./Guess";
import { KeyboardSummary } from "./KeyboardSummary";

export interface WordleState {
	guesses: Guess[];
	gameOver: boolean;
	currentRow: number;
	currentWord: string;
	summary: KeyboardSummary;
}