<script>
  import { TYPES } from "@/lib/constants";
  import { qrData, qrType } from "@/lib/stores";
  export let type, selector;

  function changeTab() {
    $qrType = selector;
    if ($qrType === TYPES.WIFI) {
      $qrData = { ssid: "", password: "", type: "WPA", hidden: "" };
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
  class={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 uppercase transition
    ${type === selector && "bg-white text-black"}`}
>
  <slot />
</button>
