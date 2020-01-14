import Vue from 'vue';
import { format } from 'date-fns';

Vue.filter('toDate', (date) => {
    if (typeof date === 'string') {
        // adding 12 hours to avoid UTC offset changing date
        date = new Date(date).setUTCHours(12);
    }
    return format(date, 'MMMM dd, yyyy');
});