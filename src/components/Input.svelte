<script>
  import EmailIcon from "@/assetes/icons/Email.svelte";
  export let placeholder = null;
</script>

<div class="relative w-full max-w-xs">
  <EmailIcon></EmailIcon>
  <input
    type="text"
    {placeholder}
    class="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
  />
</div>
