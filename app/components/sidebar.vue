<script setup lang="ts">
const themeStore = useThemeStore();
const visibleSidebar = ref<boolean>(true);
const visibleCategoryList = ref<boolean>(false);
const category = ref<{ name: string; color?: string }[]>([
  {
    name: "Work",
    color: "#ef224f",
  },
  {
    name: "Personal",
    color: "#fff224",
  },
  {
    name: "Project",
  },
  {
    name: "School",
  },
  {
    name: "Homework",
  },
]);

const colors = computed(() => {
  return category.value?.map((data) => ({
    backgroundColor: data?.color,
  }));
});

const theme = computed(() => {
  return themeStore.theme == "dark";
});

const toggleSideBar = () => {
  visibleSidebar.value = !visibleSidebar.value;
};

const toggleCategoryList = () => {
  visibleCategoryList.value = !visibleCategoryList.value;
};
</script>

<template>
  <aside
    v-if="visibleSidebar"
    class="md:w-[30%] lg:w-[20%] h-screen hidden md:block fixed inset-y-0 left-0 z-50 bg-sidebar-light dark:bg-sidebar-dark transition-all ring ring-black/10 dark:ring-white/10 rounded-e-2xl"
  >
    <div class="flex flex-col w-full h-full">
      <div
        class="w-full flex gap-1 border-b items-center border-b-black/10 dark:border-b-white/10 px-4 py-4 pt-6"
      >
        <UButton
          @click="toggleSideBar"
          icon="i-material-symbols:menu"
          size="xl"
          class="hover:scale-105 active:scale-95 bg-transparent hover:bg-transparent active:bg-transparent text-black dark:text-white cursor-pointer"
        />
        <h3 class="font-bold text-2xl">DiBinder</h3>
      </div>

      <div class="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <div class="flex flex-col gap-2">
          <div
            class="flex gap-3 items-center hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md px-4 py-2 mx-2 cursor-pointer"
          >
            <UIcon name="i-material-symbols:list-alt-outline" class="size-6" />
            <span>All</span>
          </div>
          <div
            class="flex gap-3 items-center hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md px-4 py-2 mx-2 cursor-pointer"
          >
            <UIcon name="i-material-symbols:calendar-today" class="size-6" />
            <span>Today</span>
          </div>
          <div
            class="flex gap-3 items-center hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md px-4 py-2 mx-2 cursor-pointer"
          >
            <UIcon
              name="i-material-symbols:list-alt-check-outline"
              class="size-6"
            />
            <span>Done</span>
          </div>

          <div class="w-full flex flex-col gap-1">
            <div
              @click="toggleCategoryList"
              class="flex gap-3 items-center justify-between hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md px-4 py-2 mx-2 cursor-pointer"
            >
              <div class="flex gap-3 items-center">
                <UIcon
                  name="i-material-symbols:folder-outline"
                  class="size-6"
                />
                <span>Category</span>
              </div>
              <UIcon
                :name="
                  visibleCategoryList
                    ? 'i-material-symbols:keyboard-arrow-up'
                    : 'i-material-symbols:keyboard-arrow-down'
                "
                class="size-6"
              />
            </div>

            <div v-if="visibleCategoryList" class="flex flex-col gap-2 pt-2">
              <div
                v-for="(data, index) in category"
                :key="index"
                class="flex flex-row gap-3 items-center justify-between hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md py-2 px-13 mx-2 cursor-pointer"
              >
                <div class="flex gap-3 items-center">
                  <span>{{ data?.name }}</span>
                  <div
                    v-if="data?.color"
                    class="size-3 rounded-full ring ring-black/20"
                    :style="{ backgroundColor: data.color }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full border-t border-t-black/10 dark:border-t-white/10 px-4 py-4"
      >
        <div class="w-full h-full flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <div
              @click="themeStore.toggleTheme"
              class="flex gap-3 justify-between p-2 hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md cursor-pointer"
            >
              <div class="flex gap-3 items-center">
                <UIcon name="i-material-symbols:brush-outline" class="size-6" />
                <span>Theme</span>
              </div>
              <USwitch
                v-model="theme"
                unchecked-icon="i-material-symbols:sunny-outline"
                checked-icon="i-material-symbols:moon-stars-outline"
                class="hover:cursor-pointer"
                size="lg"
                :ui="{
                  icon: 'group-data-[state=checked]:text-black dark:group-data-[state=checked]:text-white',
                  base: 'data-[state=checked]:bg-light-primary dark:data-[state=checked]:bg-dark-primary hover:cursor-pointer outline outline-gray-200/50 dark:outline-black/50',
                }"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex gap-3 justify-between p-2 hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md cursor-pointer"
            >
              <div class="flex gap-3 items-center">
                <UIcon
                  name="i-material-symbols:account-circle-full"
                  class="size-6"
                />
                <span>Profile</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex gap-3 justify-between p-2 text-red-500 hover:text-white hover:bg-light-primary hover:dark:bg-dark-primary rounded-md cursor-pointer"
            >
              <div class="flex gap-3 items-center">
                <UIcon name="i-material-symbols:logout" class="size-6" />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <div
    v-else
    class="h-screen py-6 px-2 bg-sidebar-light dark:bg-sidebar-dark transition-all ring ring-black/10 dark:ring-white/10 rounded-e-2xl"
  >
    <UButton
      @click="toggleSideBar"
      icon="i-material-symbols:menu"
      size="xl"
      class="hover:scale-105 active:scale-95 bg-transparent hover:bg-transparent active:bg-transparent text-black dark:text-white cursor-pointer"
    />
  </div>
</template>
