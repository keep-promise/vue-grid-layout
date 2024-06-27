import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';

const VueGridLayout = (app) => {
    app.component('grid-layout', GridLayout)
    app.component('grid-item', GridItem)
}

VueGridLayout.GridLayout = GridLayout;
VueGridLayout.GridItem = GridItem;

export default VueGridLayout;
