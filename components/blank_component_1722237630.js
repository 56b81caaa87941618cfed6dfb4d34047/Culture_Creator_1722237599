/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722237630", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <div class="grid">
                <div class="flex-1">
                    <nav class="bg-gray-800 text-white h-screen w-64 p-5">
                        <ul class="space-y-4">
                            <li><a href="#" class="flex items-center space-x-2 hover:text-gray-300"><i class='bx bx-home'></i><span>Home</span></a></li>
                            <li><a href="#" class="flex items-center space-x-2 hover:text-gray-300"><i class='bx bx-info-circle'></i><span>About</span></a></li>
                            <li><a href="#" class="flex items-center space-x-2 hover:text-gray-300"><i class='bx bx-envelope'></i><span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
                <div class="flex-1">
                    <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
                        <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                        </div>
                    </section>  
                </div>
            </div>
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
