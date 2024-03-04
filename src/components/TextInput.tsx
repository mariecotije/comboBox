import React from "react";
/* Pro vytvoření samotného ComboBoxu budeme nejprve potřebovat vytvořit komponentu s
obyčejným textovým inputem. Taková komponenta musí mít rozhraní, které půjde napojit na React
Hook Form (nebo obdobnou knihovnu, viz výše), komponenta musí být ale zároveň použitelná i
mimo formulářovou knihovnu (tedy mimo kontext formuláře, jako samostatná entita). Počítejte s
tím, že tato komponenta bude poté součástí další formulářové komponenty (ComboBoxu). 
Tato komponenta zároveň musí mít stavy disabled a error. V disabled stavu ji uživatel sice uvidí,
nebude ale moci upravit uživatelský vstup a zároveň komponenta “zešedne”, aby bylo jasné, že je
disabled. V error stavu komponenta zčervená a pod ní se zobrazí chybová hláška. Jak již bylo
zmíněno, tak takto musí být možnost komponentu napojit na React Hook Form (nebo obdobnou
knihovnu na formuláře), aby zobrazovala chybový stav z formulářové knihovny, zároveň ale
komponenta musí být použitelná i samostatně a to včetně nastavení chybového a disabled stavu.
Nápověda jak toto zařídit může být vytvoření další komponenty, která poskytne rozhraní mezi
formulářovou knihovnou a touto komponentou, tedy pokud budeme chtít textové pole použít ve
formuláře knihovně, tak jej ještě obalíme do další komponenty.*/

type TextInputProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  disabled?: boolean;
  error?: string;
};

function TextInput({
  label,
  name,
  register,
  errors,
  disabled,
  error,
}: TextInputProps): JSX.Element {
  return (
    <div>
      <label>{label}</label>
      <input
        {...register(name, { required: true })}
        disabled={disabled}
        style={{ borderColor: error ? "red" : "" }}
      />
      {errors[name] && <span>Toto pole je povinné</span>}
      {error && <span>{error}</span>}
    </div>
  );
}

export default TextInput;
