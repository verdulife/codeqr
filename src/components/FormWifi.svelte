<script>
  import { qrData } from "@/lib/stores";
  import { WIFI_TYPES } from "@/lib/constants";
</script>

<form class="w-full flex flex-col gap-2">
  {#each WIFI_TYPES as type}
    {#if type === "type"}
      <select
        bind:value={$qrData["type"]}
        class="w-full rounded-lg bg-gray-700 text-xl py-3 px-4 outline-none"
      >
        <option value="WPA" selected>WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="NONE">None</option>
      </select>
    {:else if type === "hidden"}
      <label class="flex items-center gap-2">
        <input type="checkbox" bind:checked={$qrData[type]} class="size-6" />
        <p>Hidden</p>
      </label>
    {:else}
      <input
        type="string"
        placeholder={type === "ssid" ? "SSID" : "Password"}
        bind:value={$qrData[type]}
        class="w-full rounded-lg bg-gray-700 text-xl py-3 px-4 outline-none"
      />
    {/if}
  {/each}
</form>
