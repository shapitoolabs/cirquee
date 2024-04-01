# Python skript pro generování .env souboru

# Definice klíčů, které chceme zahrnout do .env souboru
keys = [
    "EXPO_PUBLIC_APP_NAME",
    "EXPO_PUBLIC_APP_SLUG",
    "EXPO_PUBLIC_STORYBOOK_ENABLED",
    "EXPO_PUBLIC_BUNDLE_IDENTIFIER_ANDROID",
    "EXPO_PUBLIC_BUNDLE_IDENTIFIER_IOS",
    "EXPO_PUBLIC_EAS_PROJECT_ID",
    "EXPO_PUBLIC_DEFAULT_LANGUAGE",
    "EXPO_PUBLIC_APP_VERSION",
    "EXPO_PUBLIC_APP_PROD"
]

# Slovník pro uložení hodnot
values = {}

# Vyzvat uživatele k zadání hodnoty pro každý klíč
for key in keys:
    value = input(f"Zadejte hodnotu pro {key}: ")
    values[key] = value

# Generování .env souboru
with open(".env", "w") as env_file:
    for key, value in values.items():
        env_file.write(f"{key}=\"{value}\"\n")

print("Soubor .env byl úspěšně vytvořen.")
