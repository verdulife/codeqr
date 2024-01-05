<script>
  import qrCode from "qrcode-generator";
  import Form from "./Form.svelte";

  const typeNumber = 0;
  const errorCorrectionLevel = "L";
  const qr = qrCode(typeNumber, errorCorrectionLevel);
  qr.addData("hello");
  qr.make();

  $: result = qr.createSvgTag();

  const text = "CodeQR";
</script>

<article class="flex flex-col h-screen items-center gap-20">
  <h1>{text}</h1>
  <Form></Form>

  <section class="flex gap-20 w-full max-w-2xl">
    {#if result}
      <span>{@html result}</span>
    {/if}
  </section>
</article>
