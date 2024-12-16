# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error encountered in React 19 applications involving the `useEffect` hook.  The bug arises from incorrectly updating state within `useEffect` without specifying the correct dependencies, leading to an infinite rendering loop.  The solution illustrates the proper way to manage dependencies within the `useEffect` hook to avoid this issue.

## Bug Description
The bug involves attempting to update the state variable `count` within the `useEffect` hook without including `count` in the dependency array. This triggers an infinite loop because the state change causes a re-render, which then re-executes the `useEffect` hook, leading to another state update, and so on.

## Solution
The solution shows how to correctly manage dependencies in `useEffect` to prevent the infinite loop.  By including `count` in the dependency array, the effect only runs when the `count` value changes.