import ProfileForm from "@/containers/profile/profile-form";

export default function ProfilePage() {
  return (
    <main className="w-full min-h-screen bg-pink flex flex-col justify-center items-center gap-8">
      <h1 className="font-uniform font-extrabold text-6xl max-[450px]:text-5xl">
        WHO ARE U?
      </h1>
      <ProfileForm />
    </main>
  );
}
