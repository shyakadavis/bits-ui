import type { APISchema } from "@/types";
import { asChild, portalProp } from "./helpers";
import type * as Dialog from "$lib/bits/dialog/_types";
import { focusProp } from "./extended-types";

export const root: APISchema<Dialog.Props> = {
	title: "Root",
	description: "The root component used to set and manage the state of the dialog.",
	props: {
		preventScroll: {
			default: "true",
			type: "boolean",
			description: "Whether or not to prevent scroll on the body when the dialog is open."
		},
		closeOnEscape: {
			default: "true",
			type: "boolean",
			description: "Whether to close the dialog when the escape key is pressed."
		},
		closeOnOutsideClick: {
			type: "boolean",
			default: "true",
			description: "Whether to close the dialog when a click occurs outside of it."
		},
		open: {
			type: "boolean",
			default: "false",
			description: "Whether or not the dialog is open."
		},
		onOpenChange: {
			type: "(open: boolean) => void",
			description: "A callback function called when the open state changes."
		},
		openFocus: {
			type: focusProp,
			description: "Override the initial focus when the alert dialog is opened."
		},
		closeFocus: {
			type: focusProp,
			description: "Override the focus when the alert dialog is closed."
		},
		portal: { ...portalProp("alert dialog") }
	}
};

export const close: APISchema = {
	title: "Close",
	description: "A button used to close the dialog.",
	props: { asChild }
};

export const content: APISchema = {
	title: "Content",
	description: "The content displayed within the dialog modal.",
	props: { asChild },
	dataAttributes: [
		{
			name: "state",
			value: "'open' | 'closed'",
			description: "The state of the dialog."
		}
	]
};

export const title: APISchema = {
	title: "Title",
	description: "An accessibile title for the dialog.",
	props: { asChild }
};

export const description: APISchema = {
	title: "Description",
	description: "An accessibile description for the dialog.",
	props: { asChild }
};

export const trigger: APISchema = {
	title: "Trigger",
	description: "The element which opens the dialog on press.",
	props: { asChild }
};

export const overlay: APISchema = {
	title: "Overlay",
	description: "An overlay which covers the body when the dialog is open.",
	props: { asChild },
	dataAttributes: [
		{
			name: "state",
			value: "'open' | 'closed'",
			description: "The state of the dialog."
		}
	]
};

export const portal: APISchema = {
	title: "Portal",
	description: "A portal which renders the dialog into the body when it is open.",
	props: { asChild }
};

export const dialog = [root, trigger, content, overlay, portal, close, title, description];
