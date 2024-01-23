<script>
  import { qrData } from "@/lib/stores";
  import { WIFI_TYPES } from "@/lib/constants";

  import Input from "@/components/Input.svelte";
</script>

<form class="w-full flex flex-col gap-2">
  {#each WIFI_TYPES as type}
    {#if type === "type"}
      <select
        bind:value={$qrData["type"]}
        class="w-full rounded-lg border border-gray-500 bg-transparent py-2 px-4 shadow-sm outline-none focus:border-indigo-600"
      >
        <option value="WPA" selected>WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="NONE">NONE</option>
      </select>
    {:else if type === "hidden"}
      <select
        bind:value={$qrData["hidden"]}
        class="w-full rounded-lg border border-gray-500 bg-transparent py-2 px-4 shadow-sm outline-none focus:border-indigo-600"
      >
        <option value="" selected>FALSE</option>
        <option value="TRUE">TRUE</option>
      </select>
    {:else}
      <Input bind:data={$qrData[type]} placeholder={type} />
    {/if}
  {/each}
</form>
