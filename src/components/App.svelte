<script>
  import { qrData, qrType } from "@/lib/stores";
  import { TYPES } from "@/lib/constants";
  import { generateQr } from "@/lib/qr";

  import Tabs from "@/components/Tabs.svelte";
  import FormString from "@/components/FormString.svelte";
  import FormVcard from "@/components/FormVcard.svelte";
  import FormWifi from "@/components/FormWifi.svelte";
  import Qr from "@/components/Qr.svelte";

  let downloadEl;
  $: svg = generateQr($qrData);

  async function copySvgQR() {
    await navigator.clipboard.writeText(svg);
  }

  function downloadQr() {
    downloadEl.href = generateQr($qrData, true);
  }
</script>

<article
  class="flex items-start w-full max-w-6xl mx-auto bg-gray-950 p-8 rounded-xl border border-gray-700 mt-10"
>
  <section class="flex flex-col grow gap-8 w-2/3 pr-8">
    <Tabs></Tabs>

    {#if $qrType === TYPES.VCARD}
      <FormVcard></FormVcard>
    {:else if $qrType === TYPES.WIFI}
      <FormWifi></FormWifi>
    {:else}
      <FormString></FormString>
    {/if}
  </section>

  <section class="flex flex-col gap-2 w-1/3">
    {#if svg}
      <button on:click={copySvgQR} class="size-full">
        <Qr>
          {@html svg}
        </Qr>
      </button>

      <a
        href="/"
        download="qr.gif"
        bind:this={downloadEl}
        on:click={downloadQr}
        class="px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-700 transition"
      >
        DOWNLOAD
      </a>
    {/if}
  </section>
</article>
