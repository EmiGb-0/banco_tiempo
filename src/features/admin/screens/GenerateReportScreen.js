import React, { useState } from 'react';
import {View,Text,TextInput,Pressable,Alert,ActivityIndicator,ScrollView,StyleSheet,
} from 'react-native';
import AdminLayout from '../layouts/AdminLayout';

export default function GenerateReportScreen() {
  const [tipoReporte, setTipoReporte] = useState('Usuarios');
  const [formato, setFormato] = useState('PDF');
  const [nota, setNota] = useState('');
  const [generando, setGenerando] = useState(false);

  const tipos = ['Usuarios', 'Servicios', 'Créditos', 'Actividad'];
  const formatos = ['PDF', 'Excel', 'CSV'];

  const generarReporte = () => {
    setGenerando(true);

    setTimeout(() => {
      setGenerando(false);
      Alert.alert(
        'Reporte generado',
        `El reporte de ${tipoReporte} en formato ${formato} se generó exitosamente.`
      );
      setNota('');
    }, 1500);
  };

  return (
    <AdminLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Generar reporte</Text>
        <Text style={styles.subtitulo}>Selecciona las opciones para generar el reporte</Text>

        <View style={styles.tarjeta}>
          <Text style={styles.etiqueta}>Tipo de reporte</Text>
          <View style={styles.fila}>
            {tipos.map((t) => (
              <Pressable
                key={t}
                onPress={() => setTipoReporte(t)}
                style={[styles.chip, tipoReporte === t && styles.chipActivo]}
              >
                <Text
                  style={[
                    styles.textoChip,
                    tipoReporte === t && styles.textoChipActivo,
                  ]}
                >
                  {t}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.etiqueta}>Formato</Text>
          <View style={styles.fila}>
            {formatos.map((f) => (
              <Pressable
                key={f}
                onPress={() => setFormato(f)}
                style={[styles.chip, formato === f && styles.chipActivo]}
              >
                <Text
                  style={[
                    styles.textoChip,
                    formato === f && styles.textoChipActivo,
                  ]}
                >
                  {f}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.etiqueta}>Nota o descripción adicional</Text>
          <TextInput
            style={[styles.input, styles.area]}
            placeholder="Ej. Reporte correspondiente a este mes"
            placeholderTextColor="#94a3b8"
            value={nota}
            onChangeText={setNota}
            multiline
          />
        </View>

        <Pressable
          style={styles.boton}
          onPress={generarReporte}
          disabled={generando}
        >
          <Text style={styles.textoBoton}>
            {generando ? 'Generando reporte...' : 'Generar reporte'}
          </Text>
        </Pressable>

        {generando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="small" color="#16805f" />
            <Text style={styles.textoCargando}>Procesando datos...</Text>
          </View>
        )}

        <View style={{ height: 35 }} />
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 16,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    marginTop: 6,
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  chipActivo: {
    backgroundColor: '#16805f',
    borderColor: '#16805f',
  },
  textoChip: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
  },
  textoChipActivo: {
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  area: {
    minHeight: 70,
    textAlignVertical: 'top',
  },
  boton: {
    backgroundColor: '#16805f',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cargando: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 14,
  },
  textoCargando: {
    color: '#64748b',
    fontSize: 13,
  },
});
