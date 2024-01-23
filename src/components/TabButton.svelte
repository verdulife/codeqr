<script>
  import { TYPES } from "@/lib/constants";
  import { qrData, qrType } from "@/lib/stores";
  export let type, selector;

  function changeTab() {
    $qrType = selector;
    if ($qrType === TYPES.WIFI) {
      $qrData = { ssid: "", password: "", type: "WPA", hidden: false };
    } else if ($qrType === TYPES.VCARD) {
      $qrData = {
        firstName: "",
        organization: "",
        url: "",
        cellPhone: "",
        workPhone: "",
        email: "",
        workEmail: "",
        homeAddress_label: "",
      };
    } else $qrData = "";
  }
</script>

<button
  on:click={changeTab}
  class="px-4 py-2 text-white grow hover:bg-gray-800 rounded-md font-semibold capitalize transition"
  class:bg-blue-500={type === selector}
>
  <slot />
</button>
