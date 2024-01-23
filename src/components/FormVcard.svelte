<script>
  import { qrData } from "@/lib/stores";
  import { VCARD_TYPES } from "@/lib/constants";

  function formatPlaceholder(type) {
    if (type === VCARD_TYPES[0]) return "Name";
    if (type === VCARD_TYPES[1]) return "Phone";
    if (type === VCARD_TYPES[2]) return "Email";
    if (type === VCARD_TYPES[3]) return "Url";
    if (type === VCARD_TYPES[4]) return "Address";
  }
</script>

<form class="w-full flex flex-wrap gap-2">
  {#each VCARD_TYPES as type}
    <input
      type="string"
      placeholder={formatPlaceholder(type)}
      bind:value={$qrData[type]}
      class="grow rounded-lg bg-gray-700 text-xl py-3 px-4 outline-none"
    />
  {/each}
</form>
