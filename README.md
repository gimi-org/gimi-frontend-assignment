# Welcome to Gimi Frontend Assignment! 🚀 

This is the frontend assignment for Gimi. The goal is to create a simple app that displays a list of users and their details. See the instructions and design specification below.

## Prerequisites - Install Node.js and npm

Make sure that you have Node.js and npm installed on your machine. You can check if you have Node.js and npm installed by running the following command:

```bash
node -v
npm -v
```

You should see the version numbers of Node.js and npm if they are installed. If you don't have Node.js and npm installed, you can download and install Node.js from the following link (it will also install npm):

- [Node.js](https://nodejs.org/en/download/)

## Get started

1. Clone this repository

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the metro bundler

   ```bash
    npm start
   ```
   
4. Run the app on your device or emulator. Either scan the QR code with the Expo Go app on your phone, or run the app on an emulator by pressing `a` for Android or `i` for iOS in the terminal.

## Instructions

You will start with a basic app containing one screen that displays a list of users. Your task is to implement the following features:

1. **Update the user list**: The user list should be updated according to the design specification.

2. **User details screen**: When a user in the list is pressed, the app should navigate to a new screen that displays the user's details, according to the design specification.

## Design Specification

The design specification for the assignment can be found here: [Design Specification](https://www.figma.com/design/l3YWEhOjgl1qdDnYoUeqa9/Frontend-assignment-2024?node-id=8-97&m=dev&t=bB0hZCy3dDhJ8f5E-1)

## Tips & Tricks

### Icons 

To render an icon you can use the `SimpleLineIcons` component from `@expo/vector-icons`. Example:

```tsx
<SimpleLineIcons name="star" size={12} color="green" />
```