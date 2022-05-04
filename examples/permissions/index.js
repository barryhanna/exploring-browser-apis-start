const get_permissions = document.getElementById('get-permissions');
const perm_status = document.getElementById('status');

// Feature detection
if ('permissions' in navigator) {
  get_permissions.disabled = false;
  get_permissions.addEventListener('click', async () => {
    const permission_results = await navigator.permissions.query({
      name: 'clipboard-read',
    });
    console.log('permission_results', permission_results);
    perm_status.innerText = permission_results.state;
  });
} else {
  perm_status.innerText = 'Your browser does not support the permissions API';
}
