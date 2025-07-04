<script lang="ts">
	import { box, mergeProps } from "svelte-toolbelt";
	import type { NavigationMenuRootProps } from "../types.js";
	import { NavigationMenuRootState } from "../navigation-menu.svelte.js";
	import { createId } from "$lib/internal/create-id.js";
	import { noop } from "$lib/internal/noop.js";

	const uid = $props.id();

	let {
		child,
		children,
		id = createId(uid),
		ref = $bindable(null),
		value = $bindable(""),
		onValueChange = noop,
		delayDuration = 200,
		skipDelayDuration = 300,
		dir = "ltr",
		orientation = "horizontal",
		...restProps
	}: NavigationMenuRootProps = $props();

	const rootState = NavigationMenuRootState.create({
		id: box.with(() => id),
		value: box.with(
			() => value,
			(v) => {
				value = v;
				onValueChange(v);
			}
		),
		delayDuration: box.with(() => delayDuration),
		skipDelayDuration: box.with(() => skipDelayDuration),
		dir: box.with(() => dir),
		orientation: box.with(() => orientation),
		ref: box.with(
			() => ref,
			(v) => (ref = v)
		),
	});

	const mergedProps = $derived(mergeProps({ "aria-label": "main" }, restProps, rootState.props));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<nav {...mergedProps}>
		{@render children?.()}
	</nav>
{/if}
