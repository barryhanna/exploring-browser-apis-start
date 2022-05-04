const get_permissions = document.getElementById('get-permissions');
const perm_status = document.getElementById('status');
get_permissions.addEventListener('click', async () => {
  const permission_results = await navigator.permissions.query({
    name: 'geolocation',
  });
  console.log('permission_results', permission_results);
  perm_status.innerText = permission_results.state;
});
