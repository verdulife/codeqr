<script>
  export let data, placeholder;
</script>

<input
  type="text"
  {placeholder}
  bind:value={data}
  class="w-full rounded-lg border border-gray-500 bg-transparent py-2 px-4 shadow-sm outline-none focus:border-indigo-600"
/>
