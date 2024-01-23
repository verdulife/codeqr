<script>
  import { qrData, qrType } from "@/lib/stores";
  import { TYPES } from "@/lib/constants";
  import { prefixes } from "@/lib/phone";

  let placeholder;
  let prefixCode, phoneNumber;
  $: $qrData = prefixCode + phoneNumber;

  $: if ($qrType === TYPES.URL) placeholder = "https://";
  else if ($qrType === TYPES.EMAIL) placeholder = "Ex. info@gaplogic.com";
  else if ($qrType === TYPES.PHONE) placeholder = "Ex. 600600600";
  else if ($qrType === TYPES.WHATSAPP) placeholder = "Ex. 600600600";
</script>

<form class="w-full flex gap-2">
  {#if $qrType === TYPES.PHONE || $qrType === TYPES.WHATSAPP}
    <select
      bind:value={prefixCode}
      class="w-1/3 rounded-lg bg-gray-700 text-xl py-3 px-4 outline-none"
    >
      {#each prefixes as { label, key }}
        <option value={key}>{label}</option>
      {/each}
    </select>
  {/if}

  <input
    type="url"
    {placeholder}
    bind:value={phoneNumber}
    class="grow rounded-lg bg-gray-700 text-xl py-3 px-4 outline-none"
  />
</form>
