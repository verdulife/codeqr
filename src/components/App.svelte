<script>
  import { qrData, qrType } from "@/lib/stores";
  import { TYPES } from "@/lib/constants";
  import { generateQr } from "@/lib/qr";

  import Tabs from "@/components/Tabs.svelte";
  import FormString from "@/components/FormString.svelte";
  import FormVcard from "@/components/FormVcard.svelte";
  import FormWifi from "@/components/FormWifi.svelte";
  import Qr from "@/components/Qr.svelte";

  let result;

  async function copySvgQR() {
    await navigator.clipboard.writeText(result);
  }

  $: $qrData, (result = generateQr($qrData));
</script>

<section class="flex w-full flex-col items-center gap-20 p-10">
  <header class="bg-white/20 p-4 rounded-xl border border-gray-500">
    <Tabs></Tabs>
  </header>

  <article class="flex flex-row items-start gap-4 w-full max-w-3xl">
    <section class="flex grow">
      {#if $qrType === TYPES.VCARD}
        <FormVcard></FormVcard>
      {:else if $qrType === TYPES.WIFI}
        <FormWifi></FormWifi>
      {:else}
        <FormString></FormString>
      {/if}
    </section>

    <section class="flex w-1/3">
      {#if result}
        <button on:click={copySvgQR} class="size-full">
          <Qr>
            {@html result}
          </Qr>
        </button>
      {/if}
    </section>
  </article>
</section>
