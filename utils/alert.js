import Swal from 'sweetalert2';

export function successAlert(text) {
    Swal.fire({
        title: 'Success', icon: 'success', text: text
    });
}

export function warningAlert(text) {
    Swal.fire({
        title: 'Warning', icon: 'warning', text: text
    });
}

export function errorAlert(text) {
    Swal.fire({
        title: 'Error', icon: 'error', text: text
    });
}