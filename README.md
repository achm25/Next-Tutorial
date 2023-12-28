
## It is just a starting tutorial for next js.
## After finishing I wrote some points to improve this projectAfter finishing it, I found a series of improvements and wrote some tips about it to make it a better project.
## You can use this project and this slide to teach some topics:

[Link](https://docs.google.com/presentation/d/1pRWbE-Gvvwbsh90f_RoJQD0GGuyvndbSh4wH3g4j4ls/edit?usp=sharing)




## Level 1 completed!

![screencapture-localhost-3000-2023-10-02-23_22_50](https://github.com/achm25/Next_Project_Example/assets/48030194/af1d48e3-0787-41d7-88d5-fe2cf4ea2f6c)

![12](https://github.com/achm25/Next_Project_Example/assets/48030194/ac53258e-1308-413d-a193-615a41410f14)


## Level 2 & 3 completed!

(on /add-user)

![screencapture-localhost-3000-add-user-2023-10-02-23_38_38](https://github.com/achm25/Next_Project_Example/assets/48030194/38b77ed4-9195-4171-87c3-b361224393c2)

![2](https://github.com/achm25/Next_Project_Example/assets/48030194/f553e29d-89d9-4b1a-a6e5-bca540bcb8b9)

## Getting Started

( Using at least node v16.20.1 )

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

<strong> Code should speak not comments! </strong>

![1](https://github.com/achm25/Next_Project_Example/assets/48030194/c675e67f-af1d-4e3d-b52e-e4267081c4b2)

<strong> public: </strong>
we placed static assets like images or fonts here.

<strong> components: </strong>
In the "components" folder, you'll find numerous subfolders, each corresponding to a specific component. These subfolders may contain constants, component's styles, or child components exclusively used by the parent component.
![6](https://github.com/achm25/Next_Project_Example/assets/48030194/a96e070a-15d4-4bc4-9608-4dcd38a237ac)

<strong> utils: </strong>
The "utils" folder is reserved for functions that are used by multiple components. By defining these functions here, you ensure that all components have easy access to them

<strong> styles: </strong>
the color pallet, global variables, and styles are here.

![5](https://github.com/achm25/Next_Project_Example/assets/48030194/9115c6bf-29a0-4de6-a6ca-a82c3480c497)


<strong> models: </strong>
the models'schema using in Mongo DB is here.

<strong> layout: </strong>
we have a header and sidebar that shared between pages so we use in layout.

![4](https://github.com/achm25/Next_Project_Example/assets/48030194/35aeb62b-6434-40f0-8ff3-a8dd20cfa7e7)

<strong> Api: </strong>
Based on what address you want to call API on we create our folder and define methods that are callable on this address.

![7](https://github.com/achm25/Next_Project_Example/assets/48030194/7d9f0de3-a0f5-40a8-991d-7f1015ba8b3c)



