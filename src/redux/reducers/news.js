export default (state = defaultData, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

let defaultData = [
    {
        id: 0,
        category: "Sustainability",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 1,
        category: "New Development",
        title: "Ut enim ad minim veniam",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
        id: 2,
        category: "Design & Inovation",
        title: "Duis aute irure dolor",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    }
];